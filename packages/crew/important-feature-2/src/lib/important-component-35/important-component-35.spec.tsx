import { render } from '@testing-library/react';

import ImportantComponent35 from './important-component-35';

describe('ImportantComponent35', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent35 />);
    expect(baseElement).toBeTruthy();
  });
});
