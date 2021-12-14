import { render } from '@testing-library/react';

import Icon33 from './icon33';

describe('Icon33', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon33 />);
    expect(baseElement).toBeTruthy();
  });
});
