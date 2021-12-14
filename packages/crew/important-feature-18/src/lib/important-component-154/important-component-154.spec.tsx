import { render } from '@testing-library/react';

import ImportantComponent154 from './important-component-154';

describe('ImportantComponent154', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent154 />);
    expect(baseElement).toBeTruthy();
  });
});
