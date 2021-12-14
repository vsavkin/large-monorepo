import { render } from '@testing-library/react';

import Dialog155 from './dialog155';

describe('Dialog155', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog155 />);
    expect(baseElement).toBeTruthy();
  });
});
