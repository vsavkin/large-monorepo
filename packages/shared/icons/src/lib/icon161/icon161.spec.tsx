import { render } from '@testing-library/react';

import Icon161 from './icon161';

describe('Icon161', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon161 />);
    expect(baseElement).toBeTruthy();
  });
});
