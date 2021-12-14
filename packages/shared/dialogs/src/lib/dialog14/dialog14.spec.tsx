import { render } from '@testing-library/react';

import Dialog14 from './dialog14';

describe('Dialog14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog14 />);
    expect(baseElement).toBeTruthy();
  });
});
