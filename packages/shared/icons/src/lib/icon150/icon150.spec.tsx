import { render } from '@testing-library/react';

import Icon150 from './icon150';

describe('Icon150', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon150 />);
    expect(baseElement).toBeTruthy();
  });
});
