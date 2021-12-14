import { render } from '@testing-library/react';

import ImportantComponent132 from './important-component-132';

describe('ImportantComponent132', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent132 />);
    expect(baseElement).toBeTruthy();
  });
});
