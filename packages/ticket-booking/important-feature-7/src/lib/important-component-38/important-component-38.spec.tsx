import { render } from '@testing-library/react';

import ImportantComponent38 from './important-component-38';

describe('ImportantComponent38', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent38 />);
    expect(baseElement).toBeTruthy();
  });
});
