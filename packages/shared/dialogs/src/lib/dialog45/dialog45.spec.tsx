import { render } from '@testing-library/react';

import Dialog45 from './dialog45';

describe('Dialog45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog45 />);
    expect(baseElement).toBeTruthy();
  });
});
