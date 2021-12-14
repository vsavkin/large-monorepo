import { render } from '@testing-library/react';

import Alert167 from './alert167';

describe('Alert167', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert167 />);
    expect(baseElement).toBeTruthy();
  });
});
