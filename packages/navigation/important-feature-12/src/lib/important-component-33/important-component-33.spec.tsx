import { render } from '@testing-library/react';

import ImportantComponent33 from './important-component-33';

describe('ImportantComponent33', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent33 />);
    expect(baseElement).toBeTruthy();
  });
});
