import React from 'react';
import styles from './Rights.module.scss';
import {
  FaShieldAlt,
  FaUndo,
  FaLock,
  FaBoxOpen,
  FaUserCheck,
  FaRegNewspaper,
} from 'react-icons/fa';

const Rights: React.FC = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Rights & Policies</h1>
      <p className={styles.subtitle}>
        Welcome to <strong>Nice Gadgets</strong>. Here you can find all the
        information about your rights and our policies.
      </p>

      <div className={styles.content}>
        <div className={styles.policyCard}>
          <div className={styles.cardHeader}>
            <FaShieldAlt className={styles.icon} />
            <h3>General Terms</h3>
          </div>
          <p>
            Welcome to <strong>Nice Gadgets</strong> online store. By accessing
            or purchasing through our website, you agree to the following rights
            and policies that ensure a safe, transparent, and fair shopping
            experience. These policies apply to all visitors and customers of
            our store.
          </p>
        </div>

        <div className={styles.policyCard}>
          <div className={styles.cardHeader}>
            <FaBoxOpen className={styles.icon} />
            <h3>Product Authenticity</h3>
          </div>
          <p>
            All products available on this website, including iPhones, watches,
            and accessories, are original and come with an official warranty.
            Customers have the right to:
          </p>
          <ul>
            <li>
              Request additional details about any product before purchase.
            </li>
            <li>Check technical specifications provided on product pages.</li>
            <li>
              Contact our support team for information about compatibility,
              warranty, and accessories.
            </li>
          </ul>
        </div>

        <div className={styles.policyCard}>
          <div className={styles.cardHeader}>
            <FaUndo className={styles.icon} />
            <h3>Returns & Refunds</h3>
          </div>
          <p>
            You have the right to return or exchange an item within 14 days of
            delivery, provided that:
          </p>
          <ol>
            <li>The product is unused and in its original condition.</li>
            <li>All packaging, manuals, and accessories are included.</li>
            <li>
              Proof of purchase (invoice or order confirmation) is presented.
            </li>
          </ol>
          <p>
            Refunds will be issued using the same payment method used at
            checkout within 7–10 business days. Shipping costs are
            non-refundable unless the return is due to our mistake.
          </p>
        </div>

        <div className={styles.policyCard}>
          <div className={styles.cardHeader}>
            <FaLock className={styles.icon} />
            <h3>Privacy Policy</h3>
          </div>
          <p>
            Protecting your privacy is one of our top priorities. Personal data
            collected during the checkout process is used solely for:
          </p>
          <ul>
            <li>Processing your order and delivering your products.</li>
            <li>Providing customer support and resolving issues.</li>
            <li>
              Sending updates related to your orders or our latest promotions.
            </li>
          </ul>
          <p>
            We do not share your personal information with third parties, except
            as required by law. For more details, please see our full privacy
            statement.
          </p>
        </div>

        <div className={styles.policyCard}>
          <div className={styles.cardHeader}>
            <FaBoxOpen className={styles.icon} />
            <h3>Product Availability</h3>
          </div>
          <p>
            By placing an order, you acknowledge that product availability may
            vary, and some items could be out of stock. In such cases, we will:
          </p>
          <ul>
            <li>Notify you immediately about stock shortages.</li>
            <li>
              Offer an alternative product of equal or higher value when
              possible.
            </li>
            <li>Provide a full refund if no replacement is suitable.</li>
          </ul>
        </div>

        <div className={styles.policyCard}>
          <div className={styles.cardHeader}>
            <FaUserCheck className={styles.icon} />
            <h3>Customer Responsibilities</h3>
          </div>
          <p>
            To maintain a safe shopping environment, customers are expected to:
          </p>
          <ol>
            <li>Provide accurate and up-to-date information when ordering.</li>
            <li>Respect return deadlines and product conditions.</li>
            <li>Use our website lawfully and not for fraudulent purposes.</li>
          </ol>
        </div>

        <div className={styles.policyCard}>
          <div className={styles.cardHeader}>
            <FaRegNewspaper className={styles.icon} />
            <h3>Policy Updates</h3>
          </div>
          <p>
            Nice Gadgets reserves the right to update these policies without
            prior notice. Customers are encouraged to check this page regularly
            for updates. Continued use of the website after changes means that
            you accept the revised terms.
          </p>
        </div>

        <p className={styles.endingText}>
          Thank you for choosing <strong>Nice Gadgets</strong>. We are committed
          to providing high-quality products and excellent customer service.
        </p>
      </div>
    </section>
  );
};

export default Rights;
