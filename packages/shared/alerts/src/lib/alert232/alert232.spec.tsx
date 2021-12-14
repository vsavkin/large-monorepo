import { render } from '@testing-library/react';

import Alert232 from './alert232';

describe('Alert232', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert232 />);
    expect(baseElement).toBeTruthy();
  });
});
