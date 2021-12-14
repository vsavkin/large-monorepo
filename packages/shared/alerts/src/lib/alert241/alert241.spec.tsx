import { render } from '@testing-library/react';

import Alert241 from './alert241';

describe('Alert241', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert241 />);
    expect(baseElement).toBeTruthy();
  });
});
