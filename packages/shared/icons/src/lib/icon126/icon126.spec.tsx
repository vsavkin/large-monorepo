import { render } from '@testing-library/react';

import Icon126 from './icon126';

describe('Icon126', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon126 />);
    expect(baseElement).toBeTruthy();
  });
});
