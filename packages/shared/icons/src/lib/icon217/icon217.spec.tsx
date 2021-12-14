import { render } from '@testing-library/react';

import Icon217 from './icon217';

describe('Icon217', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon217 />);
    expect(baseElement).toBeTruthy();
  });
});
